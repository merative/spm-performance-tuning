# Changelog

All notable changes to this project will be documented in this file

## v22.4.0

### Removed

* Removed the transaction isolation Level settings for JMS producer / consumer pod data sources because the WebSphere Liberty data source `isolationLevel` setting has been removed from the underlying Helm configmaps [#109](https://github.com/IBM/spm-kubernetes/issues/109).

## v22.1.0

### Breaking Changes

* Gatsby `v4.5.2` introduced a breaking changes, when developing documentation locally.
  * The following gatsby target fails, `gatsby develop`, due to `DeprecationWarning`.

### Added

* Introduced Gatsby `v4` library
* Introduced node_js `v16`

### Removed

* Removed Gatsby `v3` library
* Removed node_js `v12`

## v21.9.0

### Added

* Foreign key constraints recommendations for production databases
* Db2: Set `HIGHMEM` bufferpool size to `AUTOMATIC`
* ~Transaction Isolation Level settings for JMS producer / consumer pod data sources~

### Changed

* Updated IBM Documentation link to SPM V8.

## v21.7.1

### Changed

* IBM Documentation has now replaced IBM Knowledge Center. Tuning guide links have been updated accordingly.
* Gatsby version upgraded to 3.10.2

## v21.7.0

### Added

* The existing IBM Cúram Social Program Management tuning guide is now available on Github, alongside the introduction of new tuning configurations for SPM on Kubernetes
