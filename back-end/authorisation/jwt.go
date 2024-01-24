package authorisation

import (
	"fmt"
	"strconv"
	"time"

	"github.com/dgrijalva/jwt-go"
)

var jwtKey = []byte("D2g.|YRlATJhf)VD~xX79rs7v1f2Gv")

type Claims struct {
	jwt.StandardClaims
}

func GenerateJWTToken(userID int) (string, error) {
	// define token expiry
	expirationTime := time.Now().Add(24 * time.Hour)
	claims := &Claims{
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: expirationTime.Unix(),
			Subject:   fmt.Sprint(userID), // Convert userID to string and set as Subject
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	tokenString, err := token.SignedString(jwtKey)
	if err != nil {
		return "", err
	}

	return tokenString, nil
}

func ValidateJWTToken(tokenString string) (int, error) {
	token, err := jwt.ParseWithClaims(tokenString, &Claims{}, func(token *jwt.Token) (interface{}, error) {
		return jwtKey, nil
	})

	if err != nil {
		// Handle specific parsing errors
		return 0, fmt.Errorf("Token parsing error: %v", err)
	}

	if !token.Valid {
		return 0, fmt.Errorf("Invalid token")
	}

	userIDStr := token.Claims.(*Claims).StandardClaims.Subject

	userID, err := strconv.Atoi(userIDStr)
	if err != nil {
		return 0, fmt.Errorf("Failed to convert user ID to integer: %v", err)
	}

	return userID, nil
}
