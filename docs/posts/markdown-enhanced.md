# Enhanced Markdown Syntax

Hugo Narrow supports GitHub Alerts through Hugo's built-in `render` function, along with Katex and Mermaid support.

## GitHub Alert

Supports GitHub-style quote blocks and Obsidian-style collapsible quotes (+/-)

> [!NOTE]
> Obsidian's collapsible and custom title blocks will appear as regular quote blocks in Typora.

### Basic Usage
```markdown
> [!NOTE]
> This is a note alert box. Used to display useful information that users should be aware of, even when skimming content.

> [!TIP]
> This is a tip alert box. Provides suggestions that help users accomplish a task better or more easily.

> [!IMPORTANT]
> This is an important alert box. Displays crucial information needed for users to succeed with their task.

> [!WARNING]
> This is a warning alert box. Critical content requiring immediate user attention due to potential risks.

> [!CAUTION]
> This is a caution alert box. Advises about actions to avoid negative consequences.
```

> [!NOTE]
> This is a note alert box. Used to display useful information that users should be aware of, even when skimming content.

> [!TIP]
> This is a tip alert box. Provides suggestions that help users accomplish a task better or more easily.

> [!IMPORTANT]
> This is an important alert box. Displays crucial information needed for users to succeed with their task.

> [!WARNING]
> This is a warning alert box. Critical content requiring immediate user attention due to potential risks.

> [!CAUTION]
> This is a caution alert box. Advises about actions to avoid negative consequences.

### Collapsible Feature

```markdown
> [!NOTE]+ Collapsible Note
> This is a collapsible note alert box. Click the title to expand or collapse the content.
> 
> More detailed information can be included here, which users can expand when needed.
```

### Complex Content
You can nest complex content

```markdown
> [!CAUTION] Complex Content Example
> This collapsible box contains complex Markdown content:
> 
> #### Subtitle
> 
> This is a paragraph containing a [link](https://example.com) and other formatting.
> 
> ```javascript
> // Code block example
> function hello() {
>   console.log("Hello, World!");
> }
> ```
> 
> | Table | Example |
> |-------|---------|
> | Row1 | Data1 |
> | Row2 | Data2 |
```

> [!CAUTION] Complex Content Example
> This collapsible box contains complex Markdown content:
> 
> #### Subtitle
> 
> This is a paragraph containing a [link](https://example.com) and other formatting.
> 
> ```javascript
> // Code block example
> function hello() {
>   console.log("Hello, World!");
> }
> ```
> 
> | Table | Example |
> |-------|---------|
> | Row1 | Data1 |
> | Row2 | Data2 |

## Katex

Hugo Narrow supports mathematical formulas through Katex.

Set params of Katex at `hugo.yaml` or `frontmatter`:

```yaml
params:
  katex:
    enabled: true
    delimiters:
      - left: "$$"
        right: "$$"
        display: true 
      - left: "$"
        right: "$"
        display: false 
      - left: "\\("
        right: "\\)"
        display: false
      - left: "\\["
        right: "\\]"
        display: true
```


## Mermaid

Hugo Narrow support Mermaid diagrams。

Set params of mermaid at `hugo.yaml` or `frontmatter`:

```yaml
params:
  mermaid:
    enabled: true
```

