// ─── LOCAL STORAGE ────────────────────────────────────────────────────────────

function loadPuzzleProgress() {
  const s = localStorage.getItem('knightPuzzleProgress');
  puzzleProgress = s ? JSON.parse(s) : {};
}

function savePuzzleProgress(level, stars) {
  if (!puzzleProgress[level] || puzzleProgress[level] < stars) {
    puzzleProgress[level] = stars;
    localStorage.setItem('knightPuzzleProgress', JSON.stringify(puzzleProgress));
  }
}

function loadAchievements() {
  const s = localStorage.getItem('knightAchievements');
  achievements = s ? JSON.parse(s) : {};
}

function saveAchievements() {
  localStorage.setItem('knightAchievements', JSON.stringify(achievements));
}

function saveHighScore(mode, sc) {
  const key = 'knightHighScore_' + mode;
  const cur = parseInt(localStorage.getItem(key) || '0');
  if (sc > cur) { localStorage.setItem(key, sc); return true; }
  return false;
}

function loadHighScore(mode) {
  return parseInt(localStorage.getItem('knightHighScore_' + mode) || '0');
}

function loadKnightSkin() {
  const saved = localStorage.getItem('knightSkin') || 'classic';
  knightSkin = KNIGHT_SKINS.find(s => s.id === saved) ? saved : (KNIGHT_SKINS[0]?.id || 'classic');
}

function saveKnightSkin(skinId) {
  knightSkin = skinId;
  localStorage.setItem('knightSkin', skinId);
}

function saveSpeedRecord(mode, ms) {
  const key = 'knightSpeedRecord_' + mode;
  const cur = parseInt(localStorage.getItem(key) || '999999999');
  if (ms < cur) { localStorage.setItem(key, ms); return true; }
  return false;
}

function loadSpeedRecord(mode) {
  return parseInt(localStorage.getItem('knightSpeedRecord_' + mode) || '0');
}
