
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 50000,
    years: 10,
    rate: 7
  };
  expect(calculateMonthlyPayment(values)).toEqual('580.54');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 30000,
    years: 5,
    rate: 10.2
  };
  expect(calculateMonthlyPayment(values)).toEqual('640.37');
});



