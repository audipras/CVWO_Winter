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

func DeleteComments(c *gin.Context) {
	id := c.Param("id")

	if err := database.DB.Where("id = ?", id).Delete(models.Comment{}); err.Error != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error.Error()})
		return
	}
}
