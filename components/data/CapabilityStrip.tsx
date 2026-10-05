export default function CapabilityStrip() {
  // Capability strip intentionally hidden on /data — skills are shown
  // in the dedicated `Skills` section. Keep component for layout
  // stability but render nothing to avoid duplication.
  return null;
}
