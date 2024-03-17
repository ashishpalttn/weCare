pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    // Install Node.js dependencies
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    // Build the React app
                    sh 'npm run build'
                }
            }
        }

        // stage('Test') {
        //     steps {
        //         script {
        //             // Run tests
        //             sh 'npm test'
        //         }
        //     }
        // }

        stage('Deploy') {
            steps {
                script {
                    // Example: Deploy to a server
                    // You would replace this with your actual deployment steps
                    sh 'npm run deploy'
                }
            }
        }
    }
}
