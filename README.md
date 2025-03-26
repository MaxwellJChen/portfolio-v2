# portfolio-v2
Second iteration of portfolio with more minimalist, designer portfolio feel. Focus on practicality and clarity in website organization before embellishment.
Goal to showcase previous works, establish contact with potential employers, and illustrate web development capabilities.

# Structure
### src
- pages: key pages of the website (e.g., home page, projects, etc.)
    - home.js: home page of entire website, landing page
    - projects.js: showcase of completed projects
    - about.js: personal description with contact information and resume
- components: React components to be reused throughout the project (e.g., buttons, navigation bar, etc.)
- assets: holds svg files and other images used

### public
- favicon_io: folder holding favicons of different sizes and formats with site.webmanifest file
- index.html: default index.html, where bundled files are placed after building the repository

# Design Choices
### Units of Measurement
1. px: concrete unit, use for border widths, box shadows, etc.
2. em: relative to parent's font size, use for font sizes
3. rem: represents font size of root element, use for margins and paddings
4. ch: width of the character 0, use for paragraph text widths or sizing containers for monospace fonts
5. vw/vh: relative to 1% of width or height of viewport, use occassionally for layouts

### Fonts
- Rubik 80s Fade: Section headers (Home, About, Projects)

# Pages
Each page will have a general "header," then a hierarchy of text and subheaders. Should make sure css namespace remains organized between different pages.

### Home
- Name, socials, and brief personal description
- Interesting visual (e.g., abacus beads sliding and transforming into digial values, or black box opening into various computational algorithms or mathematical structures)
- Navigation to rest of website in navbar

### About
- Name, socials, and more length personal description
- Interests, skills, goals, hobbies, etc.

### Projects
- Project card with project title and project image
- On click, transitions to full page with summary of methods, process, and outcomes
- Could add a search feature for project titles or tech stack used
