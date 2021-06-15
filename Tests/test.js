describe("pow", function () {

  describe('возводит x в степень 3', function () {

    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} в степени 3 будет ${expected}`, function () {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });
  it("для отрицательных n возвращает NaN", function () {
    assert.isNaN(pow(2, -1));
  });

  it("для дробных n возвращает NaN", function () {
    assert.isNaN(pow(2, 1.5));
  });
});
  // it("2 в степени 3 будет 8", function () {
  //   assert.equal(pow(2, 3), 8);
  // });

  // it("3 в степени 4 будет 81", function () {
  //   assert.equal(pow(3, 4), 81);
  // })
  // describe("тест", function() {

  //   before(() => alert("Тестирование началось – перед тестами"));
  //   after(() => alert("Тестирование закончилось – после всех тестов"));

  //   beforeEach(() => alert("Перед тестом – начинаем выполнять тест"));
  //   afterEach(() => alert("После теста – заканчиваем выполнение теста"));

  //   it('тест 1', () => alert(1));
  //   it('тест 2', () => alert(2));

  // });
