FROM tmvdl/alpine

ENV PORT=

WORKDIR /var/lib/git/project.git

RUN git config --global init.defaultBranch main

RUN git init --bare

WORKDIR /var/lib/git

USER git

CMD git daemon --reuseaddr --detach --port=${PORT}
