import React from 'react'

import { SplitLayout } from '../components/Containers'
import SEO from '../components/Utils/seo'

const UsesPage = () => (
  <>
    <SEO
      title="Uses"
      keywords={[`Benjamin Lannon`, `Portfolio`, `Web Developer`, `gatsby`]}
    />
    <h1>Uses</h1>
    <p>
      With inspiration from <a href="https://wesbos.com/uses/">Wes Bos</a>, this
      page lists software and hardware I use on a daily basis.
    </p>
    <SplitLayout>
      <div>
        <h2>Software</h2>
        <ul className="list-disc pl-4">
          <li>
            My main text editor of choice is{' '}
            <a href="https://code.visualstudio.com">VS Code</a>. If I need to
            work on a server, I use Vim.
          </li>
          <li>
            I use the <a href="https://github.com/tonsky/FiraCode">Fira Code</a>{' '}
            monospace font so I can have font ligatures.
          </li>
          <li>
            <a href="https://www.notion.so/">Notion</a> for note taking and{' '}
            <a href="https://todoist.com">Todoist</a> for a todo list.
          </li>
          <li>
            <a href="https://www.iterm2.com/">iTerm2</a> as my terminal on
            MacOS. Windows Terminal on Windows 10.
          </li>
          <li>Firefox and Chrome for web browsers.</li>
          <li>
            <a href="https://octobox.io">Octobox</a> to keep track of GitHub
            notifications.
          </li>
          <li>I use both Slack and Discord.</li>
          <li>
            <a href="https://www.adobe.com/products/xd.html">Adobe XD</a> for
            design mockups.
          </li>
        </ul>
      </div>
      <div>
        <h2>PC Build</h2>
        <p>My main machine as of July 2019 is a custom built PC</p>
        <ul className="list-disc pl-4">
          <li>AMD Ryzen 7 3700x - 8 core / 16 thread CPU</li>
          <li>Corsair Vengence LPX 3200MHz DDR4 RAM - 32GB (2x16GB)</li>
          <li>Samsung 970 Evo Plus NvMe M.2 1TB SSD</li>
          <li>Nvidia GeForce RTX 2070 Super GPU</li>
          <li>MSI MPG x570 Gaming Edge Wifi Motherboard</li>
          <li>EVGA Supernova 750W G3 Gold Power Suppy</li>
        </ul>
        <h2>Other Hardware</h2>
        <ul className="list-disc pl-4">
          <li>I use a 2015 MacBook Pro for my mobile rig.</li>
          <li>
            An{' '}
            <a href="https://aziocorp.com/collections/keyboard/products/retro-classic-usb?variant=10731924389931">
              Azio Retro Classic
            </a>{' '}
            mechanical keyboard. It has Kailh blue switches.
          </li>
          <li>
            A{' '}
            <a href="https://www.amazon.com/Dell-Optical-Mouse-MS116-275-BBCB/dp/B012DT5U96/">
              basic Dell mouse
            </a>
            .
          </li>
          <li>
            2{' '}
            <a href="https://www.amazon.com/Dell-UltraSharp-27-Inch-LED-Lit-Monitor/dp/B00P0EQD1Q">
              Dell UltraSharp U2715H external Monitors
            </a>
            .
          </li>
          <li>
            2{' '}
            <a href="https://www.elgato.com/en/gaming/key-light">
              Elgato key lights
            </a>
          </li>
          <li>Sony a5100 Mirrorless Camera</li>
          <li>Blue Yeti USB Mic w/ arm &amp; pop filter</li>
          <li>
            <a href="https://www.elgato.com/en/gaming/stream-deck">
              Elgato 15-button Stream Deck
            </a>
          </li>
        </ul>
      </div>
    </SplitLayout>
  </>
)

export default UsesPage
