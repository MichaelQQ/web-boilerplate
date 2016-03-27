import test from 'tape';

test('bodyColor', assert => {
  const msg = 'Should be green.';

  const actual = {
    bodyColor: document.body.style.color,
  };

  const expected = {
    bodyColor: 'green',
  };

  assert.deepEqual(actual, expected, msg);

  assert.end();
});

test('bodyColor After Click Btn', assert => {
  const msg = 'Should be red.';

  document.getElementById('change').click();

  const actual = {
    bodyColor: document.body.style.color,
  };

  const expected = {
    bodyColor: 'red',
  };

  assert.deepEqual(actual, expected, msg);

  assert.end();
});
