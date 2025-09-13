/**
 * Small helper to trigger re-initialization if your theme loads content asynchronously.
 * The BHASHINI plugin should handle DOM mutations but if you observe missing translations
 * after AJAX loads, dispatch a custom event to prompt recheck.
 */
define([], function(){
    'use strict';
    return function() {
        try {
            // The plugin may expose a global re-init function; if not, this acts as a safe no-op.
            if (window.bhashini && typeof window.bhashini.reinit === 'function') {
                window.bhashini.reinit();
            } else {
                // Fallback: emit a DOM event that some plugins listen to
                var evt = new CustomEvent('bhashini:reinit');
                window.dispatchEvent(evt);
            }
        } catch(e) {
            console && console.warn && console.warn('Bhashini reinit helper failed', e);
        }
    };
});