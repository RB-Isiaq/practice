#Krunch

**Description Here!**

## Fork this repository

This will create a local copy of the repository in your GitHub account

## Clone the repository

Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the code button and then click the _copy to clipboard_ icon.

Open a terminal and run the following git command:

```sh
git clone <url-you-copied>
```

where `<url-you-copied>` is the url to this repository (your fork of this project). See the previous steps to obtain the url.

For example:

```sh
git clone https://github.com/Succynice/practice.git
```

Your GitHub username will be in place of `Succynice`. Here you're copying the contents of the **practice** repository on GitHub to your computer.

## Make a branch

Change into the repository directory on your computer (if you are not already there):

```sh
cd practice/
```

Keep a reference to the original project by entering the following command:

```sh
git remote add upstream https://github.com/Succynice/practice.git
```

Create a new branch that describes the changes that you're going to make. For example, to create a branch named "adding-new-name", enter the following command:

```sh
git branch adding-new-name
```

Switch to the branch by entering `git checkout <name-of-branch>`. For our example, the command will be:

```sh
git checkout adding-new-name
```

## Make changes and commit the changes

Now open `Krunch` directory if you are not there already and make your changes.

```sh
cd Krunch/
```

Now, save your changes.

While in the project directory, if you execute the command `git status`, you'll see there are changes.

Add those changes to the branch you just created using the `git add` command:

```sh
git add names.txt
```

Next, commit those changes using the `git commit` command:

```sh
git commit -m "<your commit message>"
```

## Push changes to GitHub

Push your changes using the command `git push`:

```sh
git push origin -u <your-branch-name>
```

replacing `<your-branch-name>` with the name of the branch you created earlier.

As per our example, the command will be:

```sh
git push -u origin adding-new-name
```

## Submit your changes for review

Open your forked repository on GitHub. Click on the `Compare & pull request` button.

Create a pull request

And that's it! Your Pull Request has been submitted! :partying_face:
Soon a moderator will be merging all your changes into the main branch of this project. You will get a notification email once the changes have been merged.

<details>

> Please read further if you have any conflicts or your pull request refuses to go through.

<summary> <strong>A note on resolving merge conflicts</strong> </summary>

> Read the GitHub docs about resolving merge conflicts [here](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts).

To avoid fixing merge conflicts, all changes made will have to be discarded.

To get started, sync your forked repository by going to the GitHub page, then click the `sync fork` button. 

Next, discard your commits.

Then make a fresh clone of your newly synced repository and follow the steps from [Clone the repository](#clone-the-repository).

