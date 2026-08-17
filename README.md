# Max Rudolph

Personal site. Built with Jekyll so GitHub Pages can serve it, and structured so adding a paper or update is a YAML edit, not a layout rewrite.

## Edit content

All of the living content lives in `_data/`. Add new items **at the top** of the relevant file.

| File | What it controls |
| --- | --- |
| `_data/publications.yml` | Papers on the homepage (if `featured: true`) and on `/research/` |
| `_data/news.yml` | Homepage updates |
| `_data/photos.yml` | `/photos/` gallery |
| `_data/education.yml` | Education list on the homepage |
| `_data/navigation.yml` | Header links |
| `_config.yml` | Name, email, Scholar / GitHub / Twitter, CV path |

### Add a paper

Drop a block like this at the top of `_data/publications.yml`:

```yaml
- title: "Paper title"
  year: 2026
  venue: ICLR
  authors: "Max Rudolph*, Collaborator Name, Amy Zhang"
  featured: true
  note: "Oral presentation"
  links:
    - label: paper
      url: https://arxiv.org/abs/xxxx.xxxxx
    - label: code
      url: https://github.com/you/repo
```

`featured: true` puts it on the homepage. Leave it off (or omit it) for the full research page only. Link labels can be anything: `paper`, `code`, `project`, `demo`, `talk`, etc.

Your name is bolded automatically wherever `Max Rudolph` appears in the author string.

### Add an update

```yaml
- when: Aug 2026
  html: Short sentence, with <a href="https://example.com">optional links</a>.
```

### Add a photo

Put a reasonably sized jpg in `images/web/`, then:

```yaml
- title: Title
  place: Place
  src: /images/web/filename.jpg
  alt: Accessible description
```

## Run locally

```bash
bundle install
bundle exec jekyll serve
```

Then open [http://localhost:4000](http://localhost:4000).
