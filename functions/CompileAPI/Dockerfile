FROM ubuntu

WORKDIR /CompileAPI

#Install Lean4 on the container.
RUN apt-get update
RUN apt-get install -y curl
RUN apt-get install -y wget
RUN apt-get -y install sudo
RUN useradd -m docker && echo "docker:docker" | chpasswd && adduser docker sudo
USER docker
RUN wget -q https://raw.githubusercontent.com/leanprover-community/mathlib4/master/scripts/install_debian.sh && bash install_debian.sh ; rm -f install_debian.sh && source ~/.profile
RUN exec bash