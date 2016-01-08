headslcddisplaycomp
===================

First Kevoree to component LCD display on top of MRAA

### Build

In order to generate the JavaScript from typescript componnent, you must first install the project dependencies:

```sh
npm install
```

And then run the default grunt task:

```sh
grunt
```

The generated JavaScript sources are located in the `gen/` folder

### Test the example

In order to tests the generated javascript, you must change your directory to `gen/src/headslcddisplaycomp` and run:

Only the first time:

```sh
npm install
```

Then:

```sh
grunt kevoree
```

Be carefull, it works only for x86 or ARM. It does not work for x64 architecture.
