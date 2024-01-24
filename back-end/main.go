package main

import (
	"example/back-end/controllers"
	"example/back-end/database"
	"fmt"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	database.InitDatabase()
	router := gin.Default()
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:3000"}
	config.AllowHeaders = []string{"Content-Type", "Authorization"}

	router.Use(cors.New(config))

	//User Struct Routers
	router.POST("/users", controllers.CreateUser)
	router.GET("/users", controllers.GetUsers)
	router.DELETE("/users/:id", controllers.DeleteUser)
	router.POST("/users/:signin", controllers.SignIn)

	//Post Struct Routers
	router.POST("/posts", controllers.CreatePost)
	router.GET("/posts", controllers.GetPosts)
	router.DELETE("/posts/:id", controllers.DeletePost)

	if err := router.Run(":8080"); err != nil {
		fmt.Println("Error starting the server:", err)
	}
}
