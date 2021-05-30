const markdownItEmoji = require("markdown-it-emoji");
const syntaxHighlightPlugin = require("markdown-it-highlightjs");

module.exports = {
    plugins: {
        "posthtml-markdownit": {
            root: "./",
            plugins: [
                { plugin: markdownItEmoji, options: {} },
                { plugin: syntaxHighlightPlugin, options: {} },
            ]
        }
    }
};