package controllers

import (
	"example/back-end/database"
	"example/back-end/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func CreatePost(c *gin.Context) {
	var post models.Post

	if err := c.BindJSON(&post); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	database.DB.Create(&post)
	c.JSON(http.StatusOK, post)
}

func GetPosts(c *gin.Context) {
	var posts []models.Post

	if err := database.DB.Find(&posts).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.IndentedJSON(http.StatusOK, posts)
}

func DeletePost(c *gin.Context) {
	id := c.Param("id")

	if err := database.DB.Where("id = ?", id).Delete(models.Post{}); err.Error != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error.Error()})
		return
	}
}

func GetSpecificPost(c *gin.Context) {
	id := c.Param("id")
	var post models.Post

	if err := database.DB.Preload("Comments").Where("id = ?", id).First(&post); err.Error != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error.Error()})
		return
	}
	c.JSON(http.StatusOK, post)
}
