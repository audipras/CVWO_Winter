package controllers

import (
	"example/back-end/authorisation"
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

	userid, err := authorisation.ValidateJWTToken(c.GetHeader("Authorization"))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "error editing post"})
		return
	}

	post.UserID = userid
	database.DB.Create(&post)
	c.JSON(http.StatusOK, post)
}

func GetPosts(c *gin.Context) {
	var posts []models.Post

	if err := database.DB.Preload("Comments").Find(&posts).Error; err != nil {
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

func EditPost(c *gin.Context) {
	id := c.Param("id") //post id
	var post models.Post
	var databasePost models.Post

	if err := database.DB.Where("id = ?", id).First(&databasePost); err.Error != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error.Error()})
		return
	}

	if err := c.BindJSON(&post); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	userid, err := authorisation.ValidateJWTToken(c.GetHeader("Authorization"))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "error editing post"})
		return
	}
	if userid != databasePost.UserID {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Not authorised to edit post"})
		return
	}

	if database.DB.Where("id = ?", id).Updates(&post).RowsAffected == 0 {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "error editing post"})
		return
	}
	c.JSON(http.StatusOK, post)
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
