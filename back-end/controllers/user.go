package controllers

import (
	"example/back-end/authorisation"
	"example/back-end/database"
	"example/back-end/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func CreateUser(c *gin.Context) {
	var user models.User

	if err := c.BindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	database.DB.Create(&user)
	c.JSON(http.StatusOK, user)
}

func GetUsers(c *gin.Context) {
	var users []models.User

	if err := database.DB.Find(&users).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.IndentedJSON(http.StatusOK, users)
}

func DeleteUser(c *gin.Context) {
	id := c.Param("id")

	database.DB.Where("id = ?", id).Delete(models.User{})
}

func SignIn(c *gin.Context) {
	var user models.User         //input
	var databaseUser models.User //database

	if err := c.BindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if result := database.DB.Where("username = ?", user.Username).First(&databaseUser); result.Error != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": result.Error.Error()})
		return
	}

	if databaseUser.Password == user.Password {
		token, err := authorisation.GenerateJWTToken(databaseUser.ID)
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}
		c.JSON(http.StatusOK, gin.H{"token": token, "userid": databaseUser.ID})
	} else {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Error: Invalid Password."})
		return
	}

}
