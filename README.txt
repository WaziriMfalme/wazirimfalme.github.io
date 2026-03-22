README
Waziri Hassan Segawaa – UBUNTU Project
March 2026

Hey, this is my final project website about promoting tree planting and agroforestry in Uganda using tech. It has three pages: home (index), about me, and projects/impact.


File Structure:
index.html (home page with intro and my vision)
about.html (about me and goals/challenges)
projects.html (future plans, video, table)

style.css (all the styling and responsive stuff)

script.js (JavaScript for the interactive bits)
 
images (all photos and favicon)
favicon.ico
ubuntu.jpg
ubuntu-2.WEBP
ubuntu-3.JPG
ubuntu-4.AVIF
videos/videos.mp4 (short local video on projects page)

Paths are all relative:
- CSS linked as href="style.css"
- JS as src="script.js"
- Images like src="images/ubuntu.jpg"
- Video src="videos/videos.mp4"


What the JavaScript does (script.js)
1. Welcome alert
   - Just pops up a message when you load any page: "Welcome to UBUNTU!"

2. Age prompt thing
   - Asks your age, then shows a custom message in the <p id="greenMessage"> depending if you're under 8, 8-17, 18+, or typed nonsense.
   - For adults it asks if you want to donate/help (using confirm).
   - Purpose: make the site feel personal and encourage different age groups.

3. Theme switcher
   - Three buttons: Light, Dark, Nature
   - Saves your choice in localStorage so it remembers next time
   - Checks if your device is in dark mode and defaults to dark if no saved choice
   - Uses data-theme on <html> and CSS variables to change colors smoothly
   - I added the buttons with data-theme attributes instead of onclick

4. Image hover tooltip
   - On the tree planting photo (id="treeImg"), hover or tab-focus shows a little description
   - Simple show/hide with mouseover/mouseout + focus/blur for keyboard users


Did I reuse code from A1 or A2?
Yes I reused the HTML codes from Assignment 1, then made more improvements.

Assets (Where stuff came from)
Images (in images folder):
- favicon.ico – made it myself (simple tree icon)
- ubuntu.jpg – personal photo of Ugandan hills
- ubuntu-2.WEBP – stock-ish trees photo (free for education)
- ubuntu-3.JPG – another personal landscape shot
- ubuntu-4.AVIF – tree planting action photo (free use)

Video:
- videos.mp4 – short clip I downloaded from Instagram page.

External:
- YouTube embed on projects.html: "What is the Forest Economy?" by USAID Peru
  Link: https://youtu.be/u6JSr-3rEFo
- Links to Gold Standard and Verra websites





References (ACM style):

[1] Global Forest Watch, "Uganda Deforestation Rates & Statistics," 2026. [Online]. Available: https://www.globalforestwatch.org/dashboards/country/UGA/?category=forest-change

[2] USAID Peru, "What is the Forest Economy?," YouTube video, Feb. 2023. [Online]. Available: https://youtu.be/u6JSr-3rEFo

[3] Gold Standard Foundation, "Gold Standard Website," 2026. [Online]. Available: https://www.goldstandard.org/

[4] Verra, "Verified Carbon Standard," 2026. [Online]. Available: https://verra.org/





