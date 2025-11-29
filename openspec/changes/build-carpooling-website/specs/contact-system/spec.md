# Contact System Specification

## ADDED Requirements

### Requirement: Sticky Contact Bar
The website SHALL display a persistent sticky contact bar visible across all pages and scroll positions.

#### Scenario: Always visible
- **WHEN** user scrolls on any page
- **THEN** contact bar remains visible at fixed position
- **AND** does not obscure main content
- **AND** appears on all routes (/, /gioi-thieu, /lien-he)

#### Scenario: Mobile positioning
- **WHEN** contact bar is displayed on mobile
- **THEN** it is positioned at bottom of screen for thumb accessibility
- **AND** does not interfere with navigation
- **AND** maintains adequate spacing from screen edges

#### Scenario: Desktop positioning
- **WHEN** contact bar is displayed on desktop
- **THEN** it may be positioned at top, side, or bottom
- **AND** remains visually accessible without blocking content
- **AND** provides clear call-to-action

### Requirement: Phone Call Integration
The website SHALL enable direct phone dialing via tel: protocol for number 0971852897.

#### Scenario: Phone number display
- **WHEN** contact bar is rendered
- **THEN** phone number 0971852897 is prominently displayed
- **AND** formatted clearly (e.g., 097 185 2897 or 0971 852 897)
- **AND** includes a phone icon for visual recognition

#### Scenario: Click-to-call functionality
- **WHEN** user clicks/taps phone number
- **THEN** tel:0971852897 URI opens native phone dialer
- **AND** number is pre-populated in dialer
- **AND** works on both mobile and desktop (if supported)

#### Scenario: Phone number visibility
- **WHEN** contact bar is visible
- **THEN** phone number has high contrast for readability
- **AND** remains legible on all screen sizes
- **AND** stands out from other elements

### Requirement: Zalo Integration
The website SHALL enable direct Zalo messaging via zalo.me/0971852897 link.

#### Scenario: Zalo link display
- **WHEN** contact bar is rendered
- **THEN** Zalo link/button is prominently displayed
- **AND** includes Zalo icon or branding
- **AND** is clearly labeled (e.g., "Chat Zalo", "Nhắn Zalo")

#### Scenario: Zalo link functionality
- **WHEN** user clicks/taps Zalo link
- **THEN** opens zalo.me/0971852897
- **AND** redirects to Zalo app if installed
- **AND** opens Zalo web chat if app not available

#### Scenario: Zalo accessibility
- **WHEN** users need to contact via Zalo
- **THEN** link is easily discoverable
- **AND** action is clear (messaging intent)
- **AND** works across devices

### Requirement: Contact Information Consistency
The website SHALL display contact information consistently across all pages.

#### Scenario: Cross-page consistency
- **WHEN** user navigates between pages
- **THEN** contact bar maintains same position and appearance
- **AND** phone and Zalo links remain accessible
- **AND** no layout shift occurs when changing routes

#### Scenario: Contact page details
- **WHEN** user visits /lien-he
- **THEN** contact information is displayed in page content
- **AND** includes phone number, Zalo link
- **AND** provides booking instructions

### Requirement: Visual Prominence
The website SHALL make contact methods visually prominent to encourage user action.

#### Scenario: Call-to-action design
- **WHEN** contact bar is rendered
- **THEN** it uses contrasting colors for visibility
- **AND** buttons are large enough for easy clicking
- **AND** hover/active states provide feedback

#### Scenario: Icon usage
- **WHEN** contact methods are displayed
- **THEN** phone icon accompanies phone number
- **AND** Zalo icon accompanies Zalo link
- **AND** icons are recognizable and appropriately sized

### Requirement: Accessibility for Contact Elements
The website SHALL ensure contact elements are accessible to all users.

#### Scenario: Screen reader support
- **WHEN** contact elements are encountered by screen readers
- **THEN** they are announced with descriptive labels
- **AND** link purpose is clear
- **AND** ARIA labels are provided where needed

#### Scenario: Keyboard navigation
- **WHEN** user navigates via keyboard
- **THEN** contact links are focusable
- **AND** tab order is logical
- **AND** focus indicators are visible
