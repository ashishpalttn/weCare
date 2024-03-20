pipeline {
    agent any

  
    environment {
        NVM_DIR = "${WORKSPACE}/.nvm"
    }

    stages {

      stage('Set Up Environment') {
            steps {
                script {
                    // Install Node.js
                    sh 'curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -'
                    sh 'sudo apt-get install -y nodejs'
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Print Node.js and npm versions for verification
                    sh 'node -v'
                    sh 'npm -v'

                    // Install project dependencies
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    // Print Node.js and npm versions for verification
                    sh 'node -v'
                    sh 'npm -v'
                    
                    // Install project dependencies
                    sh 'npm install'
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
