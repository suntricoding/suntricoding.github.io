# Shortcodes

Hugo Narrow can directly use Hugo's built-in shortcode templates, including:

- Figure
- Vimeo
- YouTube
- ...

You can visit [Hugo Documentation](https://gohugo.io/content-management/shortcodes/#embedded) for more built-in shortcodes.

Additionally, two more shortcodes have been added:

- Bilibili
- Tencent Video


These shortcodes are from [Hugo Stack](https://stack.jimmycai.com/).

## Built-in Shortcodes

### Figure

```
{{< figure
  src="/images/examples/zion-national-park.jpg"
  alt="A photograph of Zion National Park"
  link="https://www.nps.gov/zion/index.htm"
  caption="Zion National Park"
  class="ma0 w-75"
>}}
```


### Vimeo

Display a Vimeo video:

```
https://vimeo.com/channels/staffpicks/55073825
```

```
{{< vimeo 55073825 >}}
```

### YouTube

Display a YouTube video:

```
https://www.youtube.com/watch?v=0RKpf3rK57I
```

```
{{< youtube 0RKpf3rK57I >}}
```

## Theme Shortcodes

### Bilibili

Complete parameters are as follows:

```
{{< bilibili VIDEO_ID PART_NUMBER >}}
```
Supports both AV and BV numbers, where PART_NUMBER is an optional parameter that specifies which part to display when provided.

Display a Bilibili video:

```
https://www.bilibili.com/video/BV1GJ411x7h7/
```

```
{{< bilibili BV1GJ411x7h7 >}}
```

### Tencent Video

Parameters are as follows:
```
{{< tencent VIDEO_ID >}}
```

Display a Tencent video:

```
https://v.qq.com/x/cover/aav44xv50k8sfjb/o01836xm9bv.html
```

```
{{< tencent o01836xm9bv >}}
```

### Masonry
Create a masonry layout gallery by:

```markdown
{{< masonry columns=4 gutter=15 >}}
![Image 1](image1.jpg)
![Image 2](image2.jpg)
{{< /masonry >}}
```

### Link

Link shortcode support three methods.

1. Use paramaters.

```markdown
{{< link title="Google" description="The world largest search engine." url="https://google.com" icon="https://google.com/favicon.ico" >}}
```

2. Use links data paramater `ID/ref` of `data/links.yaml` files.

```markdown
{{< link id="github" >}}
{{< link ref="github" >}}
```

3. Use links data paramater `group/category` of `data/links.yaml` files.

```markdown
{{< link group="social" >}}
{{< link category="social" >}}
```

> [!NOTE]
> `icon` paramater is not required, if you don't define the value, the partials will find the favicon file(.svg/.ico), if still find no avaliable icons, it will fallback to `link.svg` of assets folder.

## Custom Shortcodes

Add your shortcode templates in the `~/layout/_shortcodes` directory. If using Tailwind CSS, you'll need to compile styles locally to apply them to the theme. See [Custom Styles](/configration/custom-style) for detailed instructions on local compilation.