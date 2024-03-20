pipeline {
    agent any

    stages {
        stage('Set Up Environment') {
            steps {
                script {
                    // Define NVM_DIR with double quotes
                    def NVM_DIR = "/var/lib/jenkins/workspace/React by ChatGPT/.nvm"

                    // Install nvm, install Node.js, and use stable version
                    sh "curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash && export NVM_DIR='${NVM_DIR}' && . '${NVM_DIR}/nvm.sh' && nvm install stable && nvm use stable"
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Print Node.js and npm versions for verification
                    sh "${NVM_DIR}/versions/node/$(nvm current)/bin/node -v"
                    sh "${NVM_DIR}/versions/node/$(nvm current)/bin/npm -v"

                    // Install project dependencies
                    sh "${NVM_DIR}/versions/node/$(nvm current)/bin/npm install"
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
