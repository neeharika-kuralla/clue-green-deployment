pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out project'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t blue-green-app:v1 .'
            }
        }

        stage('Run Test') {
            steps {
                bat 'docker images'
            }
        }
    }
}