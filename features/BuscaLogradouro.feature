Feature: Search for Zip Code on post office website
  I want to find addresses using the post search form

  Scenario Outline: Search with valid data
    Given I want to find a Zip Code
    When I select <uf> and <locality> and <neighborhood>
    Then user should be able to search sucessfully
    
    Examples: 
      | uf | locality       | neighborhood |
      | MG | Belo Horizonte | Vista Alegre |
      | MG | Belo Horizonte | Serra        |
      | MG | Belo Horizonte | Betania      |
