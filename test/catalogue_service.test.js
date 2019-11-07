const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
  describe("catalogueService.countBooksByAuthor", () => {
    test("returns the total number of books written by the given author", () => {
      expect(catalogueService.countBooksByAuthor("Hilary Mantel")).toBe(5);
      expect(catalogueService.countBooksByAuthor("Celeste Ng")).toBe(1);
      expect(catalogueService.countBooksByAuthor("Charles Dickens")).toBe(3);
    });
  });

  describe("catalogueService.checkBookByTitle", () => {
    test("returns true if the book exists", () => {
      expect(
        catalogueService.checkBookByTitle("Oliver Twist")
      ).toBe(true);
    });
    test("returns false if the book doesnt exist", () => {
      expect(
        catalogueService.checkBookByTitle("Harry Potter")
      ).toBe(false);
  });
});
describe("catalogueService.countBooksByFirstLetter", () => {
  test("count books by first letter", () => {
    expect(
      catalogueService.countBooksByFirstLetter("W"));
  });
});
test("count books by first letter", () => {
  expect(
    catalogueService.countBooksByFirstLetter("w"));
});
});
describe("catalogueService.getQuantity", () => {
  test("count quantity of books certain title", () => {
    expect(
      catalogueService.getQuantity("A Place of Greater Safety")).toBe(11); 
    });
  });

  describe("catalogueService.getBooksByAuthor", () => {
    test("books by a certain author", () => {
      expect(
        catalogueService.getBooksByAuthor("Robert Bolaño")).toEqual([
          { title: "2666", author: "Robert Bolaño", quantity: 17 },
          { title: "By Night In Chile", author: "Robert Bolaño", quantity: 8 }
        ]); 
      });

      describe("catalogueService.checkQuantity", () => {
        test("books with a certain quantity", () => {
          expect(
            catalogueService.checkQuantity("By Night In Chile", 8)).toBe(true); 
          });
    test("books with a certain quantity", () => {
      expect(
        catalogueService.checkQuantity("By Night In Chile", 100)).toBe(false); 
      });
});
  });