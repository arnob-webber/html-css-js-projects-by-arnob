const moodForm = document.getElementById('mood-form');

const moodHistory = document.getElementById('mood-history');

const savedMoods = JSON.parse(localStorage.getItem('moods')) || [];

savedMoods.forEach(mood => addMoodToList(mood));
moodForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const mood = document.getElementById('mood').value;
  const date = document.getElementById('date').value;
  const moodEntry = { mood, date };
  savedMoods.push(moodEntry);
  localStorage.setItem('moods', JSON.stringify(savedMoods));
  addMoodToList(moodEntry);
});

function addMoodToList(moodEntry) {
  const li = document.createElement('li');
  li.textContent = `${moodEntry.date}: ${moodEntry.mood}`;
  moodHistory.appendChild(li);
}
