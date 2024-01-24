package models

import (
	"time"
)

type User struct {
	ID         int       `json:"id" gorm:"primaryKey"`
	Username   string    `json:"username" gorm:"unique"`
	Created_at time.Time `json:"created_at"`
	Password   string    `json:"password"`
	Posts      []Post    `gorm:"many2many:user_likes_posts;"` //represents likes on a post
	Comments   []Comment `json:"comments"`
}

type Post struct {
	ID         int       `json:"id" gorm:"primaryKey"`
	Title      string    `json:"title"`
	Body       string    `json:"body"`
	UserID     int       `json:"userid"` //foreign key
	Created_at time.Time `json:"created_at"`
	Users      []User    `gorm:"many2many:user_likes_posts;"`
	Comments   []Comment `json:"comments"`
}

type Comment struct {
	ID         int       `json:"id" gorm:"primaryKey"`
	UserID     int       `json:"userid"` //foreign key
	PostID     int       `json:"postid"` //foreign key
	Body       string    `json:"body"`
	Created_at time.Time `json:"created_at"`
}
