# Web Platform Specification

## ADDED Requirements

### Requirement: Vietnamese Language Only
The website SHALL display ALL user-facing content, UI elements, and text in Vietnamese language with no exceptions.

#### Scenario: All content in Vietnamese
- **WHEN** any page or component is rendered
- **THEN** all visible text is in Vietnamese (vi-VN)
- **AND** no English text appears in the user interface
- **AND** UTF-8 encoding supports Vietnamese diacritics (đ, ă, â, ê, ô, ơ, ư, and tone marks)

#### Scenario: Navigation and labels
- **WHEN** navigation menus, buttons, and labels are displayed
- **THEN** all text is in Vietnamese
- **AND** uses appropriate Vietnamese terminology
- **AND** follows Vietnamese grammar and style conventions

#### Scenario: Accessibility text
- **WHEN** screen readers or assistive technologies access content
- **THEN** ARIA labels are in Vietnamese
- **AND** alt text for images is in Vietnamese
- **AND** page titles and meta descriptions are in Vietnamese

#### Scenario: Error and feedback messages
- **WHEN** user interactions trigger messages or feedback
- **THEN** all messages are displayed in Vietnamese
- **AND** error messages use clear Vietnamese language
- **AND** validation messages are in Vietnamese

### Requirement: Next.js App Router Structure
The website SHALL be built using Next.js with App Router architecture to enable modern React features and optimized routing.

#### Scenario: App router configuration
- **WHEN** the application is initialized
- **THEN** it uses Next.js App Router with app/ directory structure
- **AND** supports server components by default

#### Scenario: Route organization
- **WHEN** pages are created
- **THEN** they are organized as route folders under app/
- **AND** use page.tsx for route endpoints

### Requirement: shadcn/ui Component Library
The website SHALL use shadcn/ui for all UI components to ensure consistent, accessible, and customizable design patterns.

#### Scenario: Component installation
- **WHEN** UI components are needed
- **THEN** shadcn/ui components are installed and configured
- **AND** components are accessible via @/components/ui

#### Scenario: Component customization
- **WHEN** components are rendered
- **THEN** they follow the green theme color scheme
- **AND** support responsive design patterns

### Requirement: Green Theme Configuration
The website SHALL implement a green color theme with #43A047 as the primary color throughout the interface.

#### Scenario: Primary color application
- **WHEN** theme colors are applied
- **THEN** primary color is #43A047 (green)
- **AND** contrast ratios meet WCAG AA standards

#### Scenario: Consistent theming
- **WHEN** components are styled
- **THEN** all interactive elements use the green theme
- **AND** hover/active states maintain visual consistency

### Requirement: Page Routes
The website SHALL provide three main navigation routes: Home, About, and Contact.

#### Scenario: Home page route
- **WHEN** user visits root URL (/)
- **THEN** the home page displays
- **AND** shows service overview and benefits

#### Scenario: About page route
- **WHEN** user visits /gioi-thieu
- **THEN** the about page displays
- **AND** shows detailed service information

#### Scenario: Contact page route
- **WHEN** user visits /lien-he
- **THEN** the contact page displays
- **AND** shows contact information and booking instructions

### Requirement: Layout System
The website SHALL implement a consistent layout with header, footer, and navigation across all pages.

#### Scenario: Shared layout
- **WHEN** any page is accessed
- **THEN** header with navigation is displayed at top
- **AND** footer is displayed at bottom
- **AND** sticky contact bar is visible

#### Scenario: Navigation menu
- **WHEN** navigation is rendered
- **THEN** it includes links to Home, About, Contact
- **AND** current page is visually indicated
- **AND** navigation works on mobile devices

### Requirement: TypeScript Configuration
The website SHALL use TypeScript for type safety and improved developer experience.

#### Scenario: Type checking
- **WHEN** code is written
- **THEN** TypeScript provides compile-time type checking
- **AND** interfaces are defined for data structures

#### Scenario: Component typing
- **WHEN** components are created
- **THEN** props are properly typed
- **AND** event handlers have correct signatures
