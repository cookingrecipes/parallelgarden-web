# COOKINGRECIPES

This is the main source repository which is used to generate [the
website](https://cookingrecipes.github.io).

## Getting the Repository

To clone the repository open a command line terminal in your preferred
location (get there by running `cd preferred/location` first) and run

```
git clone https://github.com/cookingrecipes/cookingrecipes.git
```

The repository will be cloned (downloaded) to your computer and then
you can find the source in your `preferred/location/cookingrecipes` (or
just get there in the command line from the current directory by `cd
cookingrecipes`).

## Prerequistites

There are two ways of showing the resulting website: on-the-fly
development visualisation and deployment to the server. Both of those
methods relies on `nodeJS` package and node package manager `npm` that
has to be installed on the development computer (the computer where
you have cloned the repository). Those packages are part of the basic
installation of many of the GNU/Linux distributions. In other case
follow the instructions for your distribution (e.g. for Debian based
distributions use `sudo apt-get install npm`).

Once `npm` is installed, you can install the required JavaScript
packages within your repository using the command

```
npm install
```

This will install the packages inside `node_modules` folder. Now your
repository should be ready for the development and deployment as
described bellow.

## Editing the Recipes

To add a new deliciousness to the cookbook, just add a new folder in
the `docs` directory of the project (repository) with the name of your
recipe (e.g. for `soup` run `mkdir docs/soup/`) and edit a
`docs/soup/README.md` file according to the [Markdown][markdown]
[language specification][markdown-cheatsheet].

Finally, add a link to the newly created article to the
`docs/README.md` file, e.g.:

```
echo "- [Delicious Soup](/soup/)" >> docs/README.md
```

## Development on the localhost

To develop on your computer and see the changes introduced to the
files in the `docs` repository in real time, run

```
npm run docs:dev
```

Which will start a local instance and update refresh the relevant page
each time you save your markdown document.

## Deployment to the github.io Pages

To deploy the pages to the server run the following command in the
project repository:

```
bash deploy.sh
```

This will take care of the upload to the github, but some
configuration needs to be updated according to your profile settings.

## Commiting the changes in this repository

To write the changes in this repository you need to add the files to a
stage for a commit using `git add <file>` command. To see the files
that have been created or changed within the repository use `git
status` command. Then commit the commands with descriptive commit
message using the command

```
git commit -m "<commit_message>"
```
and push the result back to the `cookingrecipes` project repository as

```
git push
```

Note: for this you need to be an owner of the project repository, so
you might need to fork the repository under your user account. This
will also require to change some names in the `deploy.sh` script as
described bellow.

Tip: setup your ssh-key, for passwordless ssh pushes.

## Contact Us for Your Feedback!

The maintainers of this website can be contacted via [cookingrecipes
email][email].


[markdown]: https://en.wikipedia.org/wiki/Markdown
[markdown-cheatsheet]: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

[email]: mailto:info@gratefulmood.com
