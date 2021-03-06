import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function openGithub() {
  window.open('https://github.com/akaFTS/mac0499', '_blank');
}

export default function GithubButton() {
  return (
    <button
      className="bg-gray hover-bg-mid-gray white pv2 ph2 b--none br-pill flex flex-row items-center"
      onClick={openGithub}
      type="button"
    >
      <FontAwesomeIcon icon={faGithub} className="mr2 f4" />
      <span className="fw3 f6">
        Contribuir no <span className="b">GitHub</span>
      </span>
    </button>
  );
}
