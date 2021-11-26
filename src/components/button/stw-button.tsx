import { h, Component } from '@stencil/core';

@Component({
  tag: 'stw-button',
  styleUrl: './stw-button.scss',
  shadow: true,
})
export class StwButton {
  // Own Properties
  // ====================

  // Reference to host HTML element
  // ===================================

  // State() variables
  // Inlined decorator, alphabetical order
  // =======================================

  // Public Property API
  // ========================

  // Prop lifecycle events
  // =======================

  // Events section
  // Requires JSDocs for public API documentation
  // ==============================================

  // Component lifecycle events
  // Ordered by their natural call order
  // =====================================

  // Listeners
  // ==============

  // Public methods API
  // These methods are exposed on the host element.
  // Always use two lines.
  // Public Methods must be async.
  // Requires JSDocs for public API documentation.
  // ===============================================

  // Local methods
  // Internal business logic.
  // These methods cannot be called from the host element.
  // =======================================================

  // render() function
  // Always the last one in the class.
  // ===================================

  render() {
    /**
     * If we apply focus states directly in the JSX then it work, but it doesn't work from the CSS|SCSS file
     * <button class="btn focus:outline-none focus:ring-4 focus:ring-indigo-600 focus:ring-opacity-25">
     */
    return (
      <button class="btn">
        <slot />
      </button>
    );
  }
}
