const form = document.querySelector('#save-form');
const button = document.querySelector('#save-button');
const message = document.querySelector('#message');
const entry = document.querySelector('#saved-entry');

function showEntry(link) {
  const source = document.querySelector('#saved-url');
  source.textContent = link.url;
  source.href = link.url;
  document.querySelector('#saved-note').textContent = link.note || 'No note added.';
  document.querySelector('#saved-date').textContent = `Saved ${new Date(link.created_at).toLocaleString()}`;
  document.querySelector('#entry-link').href = `/links/${link.id}`;
  entry.hidden = false;
}

async function readResponse(response) {
  const result = await response.json();
  if (!response.ok) throw new Error(result.error || 'Something went wrong. Please try again.');
  return result;
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  button.disabled = true;
  button.textContent = 'Saving…';
  message.textContent = '';
  message.className = '';
  entry.hidden = true;
  try {
    const result = await readResponse(await fetch('/api/links', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: form.elements.url.value, note: form.elements.note.value })
    }));
    showEntry(result.link);
    history.replaceState(null, '', `/links/${result.link.id}`);
    message.textContent = result.created ? 'Link saved.' : 'Already saved — here is the existing entry. Your original note is unchanged.';
    form.reset();
  } catch (error) {
    message.className = 'error';
    message.textContent = error instanceof TypeError ? 'Could not reach the app. Your input is still here; please try again.' : error.message;
  } finally {
    button.disabled = false;
    button.textContent = 'Save link';
  }
});

const match = location.pathname.match(/^\/links\/([1-9]\d*)$/);
if (match) {
  try {
    const result = await readResponse(await fetch(`/api/links/${match[1]}`));
    showEntry(result.link);
  } catch (error) {
    message.className = 'error';
    message.textContent = error instanceof TypeError ? 'Could not load the saved entry. Please refresh to try again.' : error.message;
  }
}
