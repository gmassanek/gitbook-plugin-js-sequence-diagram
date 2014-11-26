JS Sequence Diagram Plugin
==============

Install the JS Sequence Diagram plugin via **NPM**, which should be installed globally using the `-g` option:

```
$ npm install gitbook-plugin-js-sequence-diagram -g
```

> As you are installing globally, you may need to put `sudo` in front of the command, `sudo npm install gitbook-plugin-js-sequence-diagram -g`


To use the plugin in your Gitbook project, add the plugin to the `book.json` file.

```
{
    "plugins": ["js-sequence-diagram"]
}
```

Then, to include a sequence diagram, just wrap your definition in a "sequence" code block. For example:

    ``` sequence
    Title: Here is a title
    A->B: Normal line
    B-->C: Dashed line
    C->>D: Open arrow
    D-->>A: Dashed open arrow
    ```

Please reference the [js-sequence-diagrams](http://bramp.github.io/js-sequence-diagrams/) documentation for details on syntax.
