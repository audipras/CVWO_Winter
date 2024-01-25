package authorisation

import (
	"fmt"
	"time"

	"github.com/dgrijalva/jwt-go"
)

var jwtKey = []byte("D2g.|YRlATJhf)VD~xX79rs7v1f2Gv")

type Claims struct {
	jwt.StandardClaims
	UserID int
}

func GenerateJWTToken(userID int) (string, error) {
	// define token expiry
	expirationTime := time.Now().Add(24 * time.Hour)
	claims := &Claims{
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: expirationTime.Unix(),
		},
		UserID: userID,
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

	userIDInt := token.Claims.(*Claims).UserID

	return userIDInt, nil
}
