# Pricing Display Specification

## ADDED Requirements

### Requirement: Pricing Tables
The website SHALL display service pricing in clearly formatted tables for easy comparison.

#### Scenario: City route pricing table
- **WHEN** pricing section is displayed
- **THEN** "Nội thành" (City) pricing table is visible
- **AND** includes three service types: Ghép ghế (250k), Bao xe 4 chỗ (900k), Bao xe 7 chỗ (1100k)
- **AND** table has clear headers: "Loại" and "Giá"

#### Scenario: Airport route pricing table
- **WHEN** pricing section is displayed
- **THEN** "Sân bay" (Airport) pricing table is visible
- **AND** includes three service types: Ghép ghế (450k), Bao xe 4 chỗ (1100k), Bao xe 7 chỗ (1300k)
- **AND** table has clear headers: "Loại" and "Giá"

#### Scenario: Table responsiveness
- **WHEN** pricing tables are viewed on mobile
- **THEN** tables remain readable without horizontal scrolling
- **AND** text is appropriately sized
- **AND** columns align properly

### Requirement: Service Type Clarity
The website SHALL clearly distinguish between different service types and their pricing.

#### Scenario: Service type labels
- **WHEN** service types are listed
- **THEN** "Ghép ghế" (shared seat) is clearly labeled
- **AND** "Bao xe 4 chỗ" (4-seater private) is clearly labeled
- **AND** "Bao xe 7 chỗ" (7-seater private) is clearly labeled

#### Scenario: Price formatting
- **WHEN** prices are displayed
- **THEN** currency is shown with "k" suffix (e.g., 250k)
- **AND** prices are aligned for easy comparison
- **AND** formatting is consistent across tables

### Requirement: Route Differentiation
The website SHALL clearly differentiate between city routes and airport routes with their respective pricing.

#### Scenario: Route headers
- **WHEN** pricing tables are rendered
- **THEN** "Nội thành" heading is above city pricing
- **AND** "Sân bay" heading is above airport pricing
- **AND** headings are visually distinct from table content

#### Scenario: Visual separation
- **WHEN** multiple pricing tables are displayed
- **THEN** adequate spacing separates different route tables
- **AND** visual hierarchy makes sections distinguishable
- **AND** users can quickly identify relevant pricing

### Requirement: Pricing Information Accessibility
The website SHALL ensure pricing information is accessible and scannable.

#### Scenario: Table structure
- **WHEN** pricing tables are rendered
- **THEN** HTML table elements are used for proper structure
- **AND** table headers use <th> elements
- **AND** data cells use <td> elements
- **AND** tables have appropriate ARIA labels

#### Scenario: Visual readability
- **WHEN** users view pricing
- **THEN** table rows have alternating backgrounds or clear borders
- **AND** text contrast meets WCAG standards
- **AND** hover states provide visual feedback (on desktop)

### Requirement: Pricing Section Integration
The website SHALL integrate pricing tables into the home page content flow.

#### Scenario: Home page placement
- **WHEN** home page is rendered
- **THEN** pricing section appears after service benefits
- **AND** is introduced with heading "Bảng giá dịch vụ"
- **AND** fits naturally in page layout

#### Scenario: Pricing context
- **WHEN** pricing is displayed
- **THEN** it follows sections explaining service value
- **AND** precedes booking/contact call-to-action
- **AND** provides clear value proposition

### Requirement: Future Price Updates
The website SHALL structure pricing data to allow easy updates.

#### Scenario: Maintainable pricing
- **WHEN** prices need to be updated
- **THEN** pricing data is stored in easily identifiable location
- **AND** can be updated without structural changes
- **AND** changes reflect across all displays

#### Scenario: Price consistency
- **WHEN** pricing is displayed
- **THEN** same prices appear consistently across pages
- **AND** no conflicting price information exists
- **AND** pricing matches business requirements
