# golem-cmd

A command line interface for the golem R package.

## Install

Install globally

```bash
npm install -g golem-cmd
```

## Usage

### Create app

Create an app.

```bash
golem-cmd create myapp
```

### Add module

Add a module (from root of golem app)

```bash
golem-cmd module module_name
```

### Start app

Start app (from root of golem app)

```bash
golem-cmd start
```

### Favicon

```bash
golem-cmd favicon rm
golem-cmd favicon add /path/to/favicon.ico
```

### JavaScript

```bash
golem-cmd js file fileName
golem-cmd js handler handlerName
```

### CSS

```bash
golem-cmd css fileName
```
