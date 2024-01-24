package controllers

import (
	"example/back-end/database"
	"example/back-end/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func CreateComment(c *gin.Context) {
	var comment models.Comment

	if err := c.BindJSON(&comment); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	database.DB.Create(&comment)
	c.JSON(http.StatusOK, comment)
}

func GetComments(c *gin.Context) {
	var comments []models.Comment

	if err := database.DB.Find(&comments).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.IndentedJSON(http.StatusOK, comments)
}

func DeleteComments(c *gin.Context) {
	id := c.Param("id")

	database.DB.Where("id = ?", id).Delete(models.Comment{})
}
