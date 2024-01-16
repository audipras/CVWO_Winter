package main

import (
	"example/back-end/controllers"
	"fmt"
	"time"

	"github.com/gin-gonic/gin"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var db *gorm.DB

// User and Post struct
type User struct {
	ID         int       `gorm:"primaryKey"`
	Username   string    `json:"username"`
	Created_at time.Time `json:"created_at"`
	Password   string    `json:"password"`
	Posts      []Post    `gorm:"many2many:user_likes_posts;"`
}

type Post struct {
	ID         int       `gorm:"primaryKey"`
	Title      string    `json:"title"`
	Body       string    `json:"body"`
	User_ID    int       `json:"user_id"`
	Created_at time.Time `json:"created_at"`
	Users      []User    `gorm:"many2many:user_likes_posts;"`
}

// Router functions

func main() {
	dsn := "host=satao.db.elephantsql.com user=xqvvwmpt password=ssatS7KXUto_qDcQ-VQ_7bh21keOG1Kh dbname=xqvvwmpt port=5432 sslmode=require"
	var err error
	db, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		fmt.Println(err.Error())
		return
	}

	db.AutoMigrate(User{})
	router := gin.Default()

	//User Struct Routers
	router.POST("/users", controllers.CreateUser)
	router.GET("/users", controllers.GetUsers)
	router.DELETE("/users/:id", controllers.DeleteUser)

	//Post Struct Routers
	router.POST("/posts", controllers.CreatePost)
	router.GET("/posts", controllers.GetPosts)
	router.DELETE("/posts/:id", controllers.DeletePost)

	if err := router.Run(":8080"); err != nil {
		fmt.Println("Error starting the server:", err)
	}
}
