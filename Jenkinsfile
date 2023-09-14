pipeline {
    agent any
    tools {
        nodejs 'npm'
    }
    stages {
        stage('Build') {
            steps {
                sh 'docker build -t yoejo/jenkins-react-web .'
                sh 'docker push yoejo/jenkins-react-web'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker compose build'
                sh 'docker compose up -d'
            }
        }
    }

}