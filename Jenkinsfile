pipeline {
    agent any

  
    environment {
        NVM_DIR = "/var/lib/jenkins/workspace/React by ChatGPT/.nvm"
    }

    stages {

            stage('Set Up Environment') {
            steps {
                script {
                    // Install nvm
                    sh 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash'
                    sh "export NVM_DIR=${NVM_DIR}"
                    sh "source ${NVM_DIR}/nvm.sh"

                    // Install Node.js and use stable version
                    sh 'nvm install stable'
                    sh 'nvm use stable'
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
