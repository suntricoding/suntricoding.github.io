# Image Resource Usage Guide

The Hugo Narrow theme supports multiple ways to reference image resources. This guide will explain in detail how to use image resources in your content.

## Image Resource Sources

Hugo supports the following types of image resource sources:

1. Page Resources
2. Global Resources
3. Static Folder
4. External URLs

## Page Resources (Recommended)

### Basic Usage

Page resources are resource files located in the same directory as the Markdown file. This is the most recommended way to manage image resources.

```
content/
└── posts/
    └── my-post/
        ├── index.md
        ├── featured.jpg
        └── gallery/
            ├── image1.jpg
            └── image2.jpg
```

Referencing in Markdown:

```markdown
![Image description](featured.jpg)
![Image description](gallery/image1.jpg)
```



### Page Bundle Structure Recommendation

```
content/
└── posts/
    └── my-post/
        ├── index.md          # Article content
        ├── featured.jpg      # Article cover
        ├── images/           # Article image resources
        │   ├── diagram.png
        │   └── screenshot.jpg
        └── gallery/          # Gallery image resources
            ├── image1.jpg
            └── image2.jpg
```

## Global Resources

### Using in the assets Directory

```
assets/
└── images/
    ├── hero.jpg
    └── background.png
```

Referencing in Markdown:

```markdown
![](images/hero.jpg)
![](images/background.png)
```





## Static Files

### Basic Usage

Static files are stored in the `static` directory:

```
static/
└── images/
    ├── logo.png
    └── icons/
        └── github.svg
```

Referencing in Markdown:

```markdown
![Logo](/images/logo.png)
![GitHub Icon](/images/icons/github.svg)
```

## External URLs

```markdown
![External Image](https://example.com/image.jpg)
```


