package controllers

import (
	"example/back-end"
	"github.com/gin-gonic/gin"
	"net/http"
)

func CreatePost(c *gin.Context) {
	var post Post

	if err := c.BindJSON(&post); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	db.Create(&post)
	c.JSON(http.StatusOK, post)
}

func GetPosts(c *gin.Context) {
	var posts []Post

	if err := db.Find(&posts).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.IndentedJSON(http.StatusOK, posts)
}

func DeletePost(c *gin.Context) {
	id := c.Param("id")

	db.Where("id = ?", id).Delete(Post{})
}
