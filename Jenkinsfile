pipeline {
    agent any

  
    environment {
        NVM_DIR = "${WORKSPACE}/.nvm"
    }

    stages {

         stage('Set Up Environment') {
            steps {
                script {
                    // Set up directories
                    sh 'mkdir -p $HOME/nodejs'
                    sh 'curl -sL https://deb.nodesource.com/setup_16.x -o $HOME/nodejs/setup.sh'
                    sh 'chmod +x $HOME/nodejs/setup.sh'
                    sh '$HOME/nodejs/setup.sh'
                    sh 'apt-get install -y nodejs'
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
