pipeline { 
  
   agent any
   
  environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub')
  }

   stages {
     //         stage('Building our image') {
//                     steps{
//                         script {
//                         dockerImage = docker.build registry + ":$BUILD_NUMBER"
                            
//                         }
//                     }
//             }
//         stage('Deploy our image') {
//             steps{
//                 script {
//                 docker.withRegistry( '', registryCredential ) {
//                     dockerImage.push()
//             }
//         }
     
//      stage ('Stop previous running container'){
//             steps{
//                 sh returnStatus: true, script: 'docker stop $(docker ps -a | grep ${JOB_NAME} | awk \'{print $1}\')'
//                 sh returnStatus: true, script: 'docker rmi $(docker images | grep ${registry} | awk \'{print $3}\') --force' //this will delete all images
//                 sh returnStatus: true, script: 'docker rm ${JOB_NAME}'
//             }
//         }
      stage('Trigger Hit') { 
        steps { 
        echo '"There is a change..."'
        }
      }
     stage('Code checkout')
        {
            steps{
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/BSM72/multibranch.git']])
                echo 'Checking Out Code'
            }
        }
//        stage('Deploy our image') {
//             steps{
//                 script {
//                 docker.withRegistry( '', registryCredential ) {
//                     dockerImage.push()
//             }
//         }
     
     stage('All Files Met')
        {
            steps{
//                 checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/BSM72/multibranch.git']])
                echo 'All Files Met'
            }
        }
      stage ('Changing Container Name'){
            steps{
              echo '"Changing Container Name"'
//                 sh returnStatus: true, script: 'docker stop $(docker ps -a | grep ${JOB_NAME} | awk \'{print $1}\')'
//                 sh returnStatus: true, script: 'docker rmi $(docker images | grep ${registry} | awk \'{print $3}\') --force' //this will delete all images
//                 sh returnStatus: true, script: 'docker rm ${JOB_NAME}'
            }
        }
     
       stage('Build Image') {
      steps {
        bat 'docker build -t bsm123/jenkinsdockerhub .'
      }
    }
      stage('Run On Jenkins Node') {
      steps {
        bat 'docker push bsm123/jenkinsdockerhub'
      }
    }
//     stage('Deploy to Test Server') {
//             steps {
//                 script {
//                     def stopcontainer = "docker stop ${JOB_NAME}"
//                     def delcontName = "docker rm ${JOB_NAME}"
//                     def delimages = 'docker image prune -a --force'
//                     def drun = "docker run -d --name ${JOB_NAME} -p 5000:5000 ${img}"
//                     println "${drun}"
//                     sshagent(['docker-test']) {
//                         sh returnStatus: true, script: "ssh -o StrictHostKeyChecking=no docker@192.168.1.16 ${stopcontainer} "
//                         sh returnStatus: true, script: "ssh -o StrictHostKeyChecking=no docker@192.168.1.16 ${delcontName}"
//                         sh returnStatus: true, script: "ssh -o StrictHostKeyChecking=no docker@192.168.1.16 ${delimages}"

//                     // some block
//                         sh "ssh -o StrictHostKeyChecking=no docker@192.168.1.16 ${drun}"
//                     }
//                 }
//             }
//         }
     
     //          stage('Pushing Docker Image On Docker Hub')
//         {
//             steps{
//                 script{
// //                     withCredentials([string(credentialsId: 'bsm123', variable: 'dockerhubpwd')]) {
// //                         bat 'docker login -u bsm123 -p rabiapagala12'
// //                         bat 'docker push bsm123/multibrnch'
//                     bat 'docker push bsm123/multibrcnh:tagname'
// //                     }
//                 }
//             }
//         }
    

         stage("Application Pushed to docker Hub") { 
         steps { 
           echo '"deploying application..."'
         }

     }
  
   	}

   }
