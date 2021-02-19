#!/usr/bin/env node

import consola from 'consola'
import { DockerGenerator } from './generator'

export default function run() {
  try {
    const generator = new DockerGenerator()
    generator.run()
  } catch (e) {
    consola.error(e)
  }
}

run()
