# Vardent — Editing Guide

Everything you need to update the site lives in one place:

```
content/site.ts
```

Open that file in any text editor (VS Code works great), make your change,
save, push to Git, and Netlify rebuilds the site automatically — usually
within 90 seconds.

---

## 1. Changing any headline or body text

Open `content/site.ts`. Every piece of text on the site is in this file.
Search for the words you want to change (Cmd + F on Mac), edit the text
inside the quote marks, and save.

**Example — changing the hero headline:**

Find this:
```
headlineLine1: 'Sustainability.',
headlineLine2: 'Verified.',
headlineLine3: 'Not just claimed.',
```

Change it to:
```
headlineLine1: 'Trust starts',
headlineLine2: 'here.',
headlineLine3: 'Not somewhere else.',
```

Rules:
- Only change the text inside the quotes `'like this'`
- Do not remove commas, colons, or the quote marks themselves
- Do not change line indentation

---

## 2. Adding or removing a FAQ item

In `content/site.ts`, scroll to the `faq:` section. You will see a list
that looks like:

```
items: [
  {
    question: 'What is VARDENT?',
    answer:   'VARDENT is a platform...',
  },
  ...
]
```

**To add a question:** Copy one `{ question: ..., answer: ... }` block,
paste it at the end of the list (before the closing `]`), and update the text.
Make sure each block ends with a comma.

**To remove a question:** Delete the entire `{ question: ..., answer: ... },`
block including its comma.

---

## 3. Changing a stat number or label

In `content/site.ts`, scroll to the `stats:` section:

```
stats: [
  {
    number: '42%',
    label:  'of green claims are false or misleading',
    source: 'EU Commission, 2021',
  },
  ...
]
```

Change the `number`, `label`, or `source` text inside the quotes. Save.

---

## 4. Updating the contact email

In `content/site.ts`, scroll to the `footer:` section. Find:

```
{ label: 'Contact', href: 'mailto:amobeydeborah2000@gmail.com', ... },
```

Replace `amobeydeborah2000@gmail.com` with the new email address.

You also need to update the same address in the Netlify dashboard:
**Site → Configuration → Environment Variables → NOTIFICATION_EMAIL**

---

## 5. Adding a new feature card (What We Do section)

In `content/site.ts`, scroll to the `what:` section and find `cards:`.
Copy one card block:

```
{
  title: 'Card Title',
  body:  'Card description goes here.',
  icon:  'star' as const,
},
```

Paste it after the last card (before the closing `]`). Available icon choices
are: `'star'`, `'check'`, or `'plus'`. Change the title and body text.

---

## 6. Viewing form submissions

**In Airtable (main store):**
1. Go to airtable.com and log in
2. Open the Vardent base
3. You will see two tables: Brands and Consumers
4. Every submission appears as a new row automatically

**In Netlify Forms (backup):**
1. Go to netlify.com and log in
2. Open the Vardent site
3. Click **Forms** in the left sidebar
4. You will see submissions for `brands` and `consumers`

You will also receive an email to `amobeydeborah2000@gmail.com` every time
someone submits either form.

---

## 7. Deploying a change

After editing `content/site.ts`, run these three commands in your terminal
(or use the VS Code Source Control panel):

```
git add content/site.ts
git commit -m "Update copy"
git push
```

Netlify detects the push and rebuilds the site automatically. You can
watch the build progress at netlify.com under your site's **Deploys** tab.

---

## 8. What never to touch

Unless you are working with a developer, do not edit any file outside
`content/site.ts`. In particular:

- `app/` — the page structure and API routes
- `components/` — the visual building blocks
- `tailwind.config.ts` — colour and font definitions
- `netlify.toml` — deployment configuration
- `package.json` — project dependencies

Changing these files incorrectly can break the site. All safe edits are
in `content/site.ts`.
