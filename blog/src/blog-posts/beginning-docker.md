---
title: "Beginning Docker for development"
date: "2017-01-02"
author: Mark Joseph Ronquillo
tags: development, docker
---

Recently I've been playing with [Docker](www.docker.com) as a new way to build and deploy applications. Docker leverages on the Unix technology called containers. The idea is that you can package codes, applications and its dependencies so that they are isolated. 

Containers are not virtual machines. To quote the documentation:
> __Virtual machines__ include the application, the necessary binaries and libraries, and an entire guest operating system -- all of which can amount to tens of GBs. While __containers__ include the application and all of its dependencies --but share the kernel with other containers, running as isolated processes in user space on the host operating system. Docker containers are not tied to any specific infrastructure: they run on any computer, on any infrastructure, and in any cloud.

This post aims to explain how to use Docker at a basic level. 

## Definition of terms
Before we get started in learning how to use Docker, we first define some terms used in this context to establish some common ground. 

1. _Docker Image_ is an immutable collection of filesystem changes. 
2. _Docker Container_ is a running instance of the docker image.

You can view the relationship of docker image and docker container as a OOP's class and object relationship. An object is an instance of the class, as compared to the container, the running instance of a docker image. Just like objects, you can instantiate containers as much as you want as long as your resources permits it.

A docker image can start, for example, as a plain ubuntu operating system. In a way, we can view this as the new docker image inherits __from__ the ubuntu OS. We can extend the image by running commands like installs or copy source codes from your machine to the docker image. By the way, you can define all these changes and inheritance using the __Dockerfile__.


- - -

## Installing Docker
If you are using a mac, you have two ways to install docker, you can install Docker for Mac or you can use the Docker Toolbox. In this post I will use the Docker toolbox.

To get started with docker, you can download the docker toolbox installer for mac or for windows [here](https://www.docker.com/products/docker-toolbox). This toolbox includes 3 command line tools **docker**, **docker-machine**, **docker-compose**. Most of the functionalities of the **docker** cli tool includes managing the docker images and containers. The **docker-machine** cli tool manages the created server instances (or machines), both for local and in cloud. The **docker-compose** is responsible for managing group of containers. 


## Running a container
As described earlier, you can view a docker image as a class while the container is your object. To run a container based on a docker image run the command **docker run image-name**. If you don't have a local copy of the docker image in your machine, docker will try to download it in the docker hub repository. The docker hub repository hosts both public and private docker images. The repository provides ready made images, like MySQL, Redis or python, for the user to download.

- - -

## Dockerizing a simple NodeJS application:

In this section we will setup a basic ExpressJS (NodeJS) application and use Docker in our development.

### Creating a new ExpressJS application

First we need to download express and express-generator by running **npm install express express-generator -g**. This saves the libraries in a global level which means you can access them wherever you are in your terminal. We now then create a new expressjs application using the generator we installed. Run the application using the **npm start** command. By now you should be able to see default ExpressJS running in your browser by accessing _localhost:3000_.


### Building our app's Docker image

To start using Docker in your development, we need to download the node docker image by running **docker pull node:latest**. After we download the image, we can now run a container of that image to __host__ our application files. To do this, go inside the project directory and run this command 

```sh
docker run --rm --name mynodeapp --volume $(pwd):/opt/node_app --workdir /opt/node_app -p 8000:3000 node:latest npm start
```

I'll explain how this command works.

- docker run : this command creates an instance of the docker image and runs it.
- --rm : this flag tells the command to delete the container if the container stopped.
- --name : the current container's name.
- --volume $(pwd):/opt/node_app : this parameter rides the files in your present working directory (which is the node project directory) to the container's /opt/node_app folder.
- --workdir /opt/node_app : this parameter sets our default directory to be in the /opt_node_app directory.
- -p 8000:3000 : by default the nodejs application runs on port 3000, what this parameter does is that it attaches the port 3000 of the container to the port 8000 of the host machine. If you are using linux, normally the host machine will be your localhost. If you are using Mac, you can view your docker machine's ip by **docker-machine ip**
- node:latest : this is the docker image that we will run.
- npm start : given our working directory (--workdir), we run the command npm start, to start our express application.

After running this command, you'll see our expressjs project is now running. To view it in the browser, access **[your docker machine ip]:8000**. You can try changing the content of the index file and you'll see that it will reflect the changes after you refresh your browser. This is possible because we used **--volume** in our container. To stop the container, you can do a **Ctrl-C** or open a new terminal session (run this command if you are not using Linux, **eval $(docker-machine env default)** to load the environment files) and run the **docker stop mynodeapp** command.

![express](express-base.png)

Note that there are different ways to achieve the things we are trying to here. This is just one way to setup our development environment. In the future posts, we'll setup this node application to connect to a mongodb container instance.




