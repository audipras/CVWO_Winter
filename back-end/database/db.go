package database

import (
	"example/back-end/models"
	"fmt"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func InitDatabase() {
	dsn := "host=localhost user=postgres password=postgres dbname=cvwo port=5432 sslmode=disable"
	var err error
	DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		fmt.Println(err.Error())
		return
	}

	DB.AutoMigrate(models.User{})
	DB.AutoMigrate(models.Post{})
	DB.AutoMigrate(models.Comment{})

}
